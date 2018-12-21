import GroceryItem from './../model/groceryItem'

class GroceryController {
  static async getGroceries(req, res) {
    try {
      const groceries = await GroceryItem.find();
      return res.status(200).json({
        message: 'Groceries retrieved successfully',
        groceries
      });
    } catch (e) {
      return res.status(500).json({
        error: e.message
      })
    }
  }

  static async addGrocery(req, res) {
    try {
      const grocery = new GroceryItem(req.body);
      await grocery.save();
      return res.status(201).json({
        message: 'Successfully added a grocery',
        grocery
      })
    } catch (e) {
      return res.status(500).json({
        error: e.message
      })
    }
  }

  static async updateGrocery(req, res) {
    try {
      const grocery = await GroceryItem.findOneAndUpdate({ _id: req.params.id },  req.body, { new: true });
      return res.status(200).json({
        message: `Grocery successfully ${grocery.purchased ? 'bought' : 'unbought'}`,
        grocery
      })
    } catch (e) {
      return res.status(500).json({
        error: e.message });
    }
  }

  static async deleteGrocery(req, res) {
    try {
      await GroceryItem.deleteOne({ _id: req.params.id });
      return res.status(200).json({
        message: 'Grocery deleted successfully'
      });
    } catch (e) {
      return res.status(500).json({
        error: e.message
      })
    }
  }
}

export default GroceryController