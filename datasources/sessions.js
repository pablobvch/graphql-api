const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

const sessions = require("../data/sessions.json");

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    //throw new Error(); it was forced to throw an error to visualize different ways to show it to the user
    return session[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addSession(session) {
    session.id = 12;
    sessions.push(session);
    return session;
  }
}

module.exports = SessionAPI;
