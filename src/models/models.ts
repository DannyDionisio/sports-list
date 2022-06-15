export interface Sport {
  id: string;
  attributes: {
    icon: string;
    name: string;
    description: string;
  };
  relationships: {
    images: {
      data: {
        url: string;
      }[];
    };
    tags: {
      data: Array<string>;
    };
  };
}
