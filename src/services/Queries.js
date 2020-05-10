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
}
export default Queries;
