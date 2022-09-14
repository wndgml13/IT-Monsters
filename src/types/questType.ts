export interface IQuest {
  bookmarkCnt: number;
  classes: {
    frontend: number;
    backend: number;
    fullstack: number;
    designer: number;
  };
  commentCnt: number;
  content: string;
  createdAt: string;
  duration: number;
  modifiedAt: string;
  nickname: string;
  questId: number;
  stacks: string[];
  status: false;
  title: string;
}