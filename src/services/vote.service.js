import db from '../database/models';
import Queries from './Queries';
/** vote service */
class voteService {

  /**
 * voting candidate
 * @param {string} email candidate email
 * @param {integer} votes votes
 * @returns {String} sussfull message.
 */
  static async createVotes(email, votes) {
    return Queries.votingCandidate(db.Candidate, email, votes);
  }


}
export default voteService;
