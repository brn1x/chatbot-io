import { Replace } from 'apps/shared/replace';
import { randomUUID } from 'crypto';

export interface MessageProps {
  content: string;
  createdAt: Date;
  type: MessageType;
  from: string;
  to?: string | null;
}

export type MessageType = 'QUESTION' | 'RESPONSE';

export class Message {
  private _id: string;
  private props: MessageProps;
  private _category: string;

  constructor(props: Replace<MessageProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this._category = 'TEXT';
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get content(): string {
    return this.props.content;
  }
  public set content(content: string) {
    this.props.content = content;
  }

  public get from(): string {
    return this.props.from;
  }
  public set from(from: string) {
    this.props.from = from;
  }

  public get to(): string | null | undefined {
    return this.props.to;
  }
  public set to(to: string) {
    this.props.to = to;
  }

  public get category(): string {
    return this._category;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get type(): MessageType {
    return this.props.type;
  }

  public get id(): string {
    return this._id;
  }
}
