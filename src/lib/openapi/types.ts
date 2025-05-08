import * as Schema from './schema';

export type Issue = Schema.components['schemas']['Issue'];
export type User = Schema.components['schemas']['IssueUser'];
export type Comment = Schema.components['schemas']['Comment'];
export type DetailedComment = Schema.components['schemas']['DetailedComment'];
export type MetaComment = Schema.components['schemas']['MetaComment'];

export type CommentIncludeQueryType = 'issue' | 'user';

export default {};
