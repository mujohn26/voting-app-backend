
import VoteServices from '../services/vote.service';
import CandidateServices from '../services/candidate.service';
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
      let totalVotes;
      const candidates = await CandidateServices.findCandidates();
      candidates.map((candidate) => {
        if (candidate.email === email) {
          totalVotes = candidate.votes + 1;
        }
      });
      const votedCandidate = await VoteServices.createVotes(email, totalVotes);
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
