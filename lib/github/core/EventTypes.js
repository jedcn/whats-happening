/**
 * These are the types of events that user activity can create
 *
 * https://developer.github.com/v3/activity/events/types/
 */
const EventTypes = {
  CommitCommentEvent: 'CommitCommentEvent',
  CreateEvent: 'CreateEvent',
  DeleteEvent: 'DeleteEvent',
  PullRequestEvent: 'PullRequestEvent',
  IssueCommentEvent: 'IssueCommentEvent',
  IssuesEvent: 'IssuesEvent',
  PullRequestReviewCommentEvent: 'PullRequestReviewCommentEvent',
  PushEvent: 'PushEvent',
  WatchEvent: 'WatchEvent'
};

module.exports = EventTypes;
