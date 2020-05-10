
import VoteServices from '../services/vote.service';

import response from '../helpers/response.helper';


/**
 * Class for voting candidates
 */
class VoteController {
/**
   * creating and saving candidate votes in the database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} A user object with selected fields
   */
  static async createVote(req, res) {
    try {
      const {
        email,
        votes
      } = req.body;

      const votedCandidate = await VoteServices.createVotes(email,votes);
      console.log('=-=-=-=-=',votedCandidate);
      response.successMessage(
        res,
        'You voted this candidate successfully',
        201
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }
}


export default VoteController;
