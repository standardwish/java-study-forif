export interface multiSelect {
  name: string;
  color: string;
}

export interface rich_text {
  id: string;
  rich_text: [{ text: { content: string } }];
}

export interface rich_week {
  id: string;
  rich_text: [{ text: { content: number } }];
}

export interface title {
  id: string;
  title: { text: { content: string } }[];
}

export interface Tags {
  id: string;
  multi_select: multiSelect[];
}

export interface Assignment {
  NameOfAssignment: string;
  Tags: multiSelect[];
  Week: number;
  Mentor: string;
  pageId: string;
}

export interface AssignmentData {
  rowStructured: Assignment[];
}

export interface notionRow {
  NameOfAssignment: title;
  Tags: Tags;
  Week: rich_week;
  Mentor: rich_text;
}
export interface plainBlockData {
  id: string;
  type: "paragraph";
  paragraph: {
    rich_text: [
      {
        plain_text: string;
        annotations: {
          bold: boolean;
        };
      }
    ];
  };
}

export interface codeBlockData {
  id: string;
  type: "code";
  code: {
    rich_text: [
      {
        plain_text: string;
        annotations: {
          bold: boolean;
        };
      }
    ];
  };
}

export interface BlockData {
  data: {
    results: plainBlockData[] | codeBlockData[];
  };
}
