const { compareAsc } = require('date-fns');
const { fromJS } = require('immutable');

const wantMoreEvents = (data, beginning) => {
  const oldestEvent = data[data.length - 1];
  const oldestEventDate = new Date(oldestEvent.created_at);
  return compareAsc(oldestEventDate, beginning) >= 0;
};

const discardEventsBefore = (startDate) => {
  return (event) => {
    const createdAtDate = new Date(event.created_at);
    return compareAsc(createdAtDate, startDate) >= 0;
  }
};

async function getUserEventsFrom(octokit, user, beginning) {
  let response = await octokit.activity.getEventsForUser({
    per_page: 100,
    username: user
  });
  let { data } = response;
  let hasNextPage = octokit.hasNextPage(response);
  while (hasNextPage && wantMoreEvents(data, beginning)) {
    response = await octokit.getNextPage(response);
    hasNextPage = octokit.hasNextPage(response);
    data = data.concat(response.data)
  }
  return data.filter(discardEventsBefore(beginning));
}

const fetchUserEvents = ({ octokit, user, beginning }) => {
  return getUserEventsFrom(octokit, user, beginning).then((data) => fromJS(data));
};

module.exports = fetchUserEvents;
