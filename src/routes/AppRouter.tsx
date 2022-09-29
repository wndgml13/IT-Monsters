import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage } from "../pages/Login/SignInPage";
import { SignUpPage } from "../pages/Login/SignUpPage";
import { MainPage } from "../pages/MainPage";
import { MyPage } from "../pages/MyPage";
import { PostsDetail } from "../components/PostsDetail";
import { AddPosts } from "../components/AddPosts";
import { SearchPage } from "../pages/SearchPage";
import { FooterNavBar } from "../components/FooterNavBar";
import { ChatListPage } from "../pages/Chats/ChatListPage";
import { ChatRoomPage } from "../pages/Chats/ChatRoomPage";
import { Header } from "../components/Header";
import { NotificationPage } from "../pages/NotificationPage";
import { EditPosts } from "../components/EditPosts";
import { FindMyEmail } from "../pages/Login/FindMyEmail";
import { OAuthKakao } from "../pages/Login/OAuthKakao";
import { OAuthGoogle } from "../pages/Login/OAuthGoogle";
import { OAuthNaver } from "../pages/Login/OAuthNaver";
import { UserPage } from "../pages/UserPage";
import { getCookieToken } from "../config/cookies";
import { NoLoginError } from "../pages/ErrorPage/NoLoginError";

const AppRouter = () => {
  const usertoken = getCookieToken();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainPage />
            </>
          }
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/oauth/kakao/callback/*" element={<OAuthKakao />} />
        <Route path="/oauth/naver/callback/*" element={<OAuthNaver />} />
        <Route path="auth" element={<OAuthGoogle />} />
        <Route path="/findmyemail" element={<FindMyEmail />} />
        <Route
          path="/mypage"
          element={usertoken ? <MyPage /> : <NoLoginError />}
        />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/posts/:id" element={<PostsDetail />} />
        <Route
          path="/addposts"
          element={usertoken ? <AddPosts /> : <NoLoginError />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/chats"
          element={usertoken ? <ChatListPage /> : <NoLoginError />}
        />
        <Route
          path="/chats/:id"
          element={usertoken ? <ChatRoomPage /> : <NoLoginError />}
        />
        <Route
          path="notification"
          element={usertoken ? <NotificationPage /> : <NoLoginError />}
        />
        <Route path="/editposts/:id" element={<EditPosts />} />
      </Routes>
      <FooterNavBar />
    </BrowserRouter>
  );
};
export default AppRouter;
