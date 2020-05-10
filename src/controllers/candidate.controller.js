
import CandidateServices from '../services/candidate.service';

import response from '../helpers/response.helper';


/**
 * Class for creating candiates
 */
class candidateController {
/**
   * creating and saving candidate data in the database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} A user object with selected fields
   */
  static async signup(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        image,
        votes
      } = req.body;
      const newCandidate = {
        firstName,
        lastName,
        image,
        email,
        votes
      };
      const createdCandidate = await CandidateServices.createCandidate(newCandidate);
      response.successMessage(
        res,
        'Candidate was created successfully',
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

  /**
   * creating and saving candidate data in the database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} A user object with selected fields
   */
  static async getCandidates(req, res) {
    try {
      const candidates = await CandidateServices.findCandidates();
      response.successMessage(
        res,
        'All candidates',
        201,
        candidates
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


export default candidateController;
