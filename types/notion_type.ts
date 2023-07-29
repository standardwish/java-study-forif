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
}

export interface AssignmentData {
  rowStructured: Assignment[];
}
