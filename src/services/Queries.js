import { Op } from 'sequelize';
import db from '../database/models';
/**
 * class for responses
 */
class Queries {
  /**
 * creating candidate query
 * @param {string} table candidate table in database.
 * @param {string} data the data to be inputed in database.
 * @returns {array} data the data to be returned.
 */
  static async create(table, data) {
    try {
      const datas = await table.create(data);
      return datas;
    } catch (error) {
      return error;
    }
  }

  /**
 * voting candidate
 * @param {object} table table to be searching from
 * @param {string} email candidate email
 * @param {integer} votes votes
 * @returns {array} data the data to be returned.
 */
  static async votingCandidate(table, email, votes) {
    try {
      const updatedVote = await table.update(
        { votes },
        {
          where: {
            email
          }
        }
      );
      return updatedVote;
    } catch (error) {
      return error;
    }
  }

  /**
   * searching a candidates
   * @param {string} table candidates table in database.
   * @returns {array} data the data to be returned.
   */
  static async findAllCandidates(table) {
    const data = await table.findAll();
    return data;
  }
}
export default Queries;
