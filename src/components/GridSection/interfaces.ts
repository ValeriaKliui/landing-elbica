export interface GridSectionProps<T> {
  title: string;
  id?: string;
  images: string[];
  infoItems: Array<{ [key: string]: string | string[] }>;
  Block: (props: T) => JSX.Element;
}
