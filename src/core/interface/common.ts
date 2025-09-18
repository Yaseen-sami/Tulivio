export interface IRoute {
  path: string;
  name: string;
  component: React.FC;
  authRequired?: boolean;
}