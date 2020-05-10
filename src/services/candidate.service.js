import db from '../database/models';
import Queries from './Queries';


/**
 * This class contains functions for all candidate services.
 */
class CandidateServices {
  /**
 * creating user query
 * @param {string} newCandidate new candidate data
 * @returns {array} data the data to be returned.
 */
  static async createCandidate(newCandidate) {
    return Queries.create(db.Candidate, newCandidate);
  }
}
export default CandidateServices;
