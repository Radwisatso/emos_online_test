const { Op } = require('sequelize')
const { zeroPad } = require('../helpers/zeroPad')
const { StockSelling, MasterProduct, DistributorSelling, TokoSelling } = require('../models')

class SellingController {

    // get selling data
    static async getSellingData(req, res) {
        try {
            const result = await StockSelling.findAll()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    // get master product data
    static async getProductData(req, res) {
        try {
            const result = await MasterProduct.findAll()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    // get all summary sellings
    static async getSummarySelling(req, res) {
        console.log(req.body)

        let year = new Date().getFullYear()
        let month = new Date().getMonth()
        let selectedMonth = req.body.month || month

        switch (selectedMonth) {
            case 'january':
                month = 0
                break;
            case 'february':
                month = 1
                break;
            case 'march':
                month = 2
                break;
            case 'april':
                month = 3
                break;
            case 'may':
                month = 4
                break;
            case 'june':
                month = 5
                break;
            case 'july':
                month = 6
                break;
            case 'august':
                month = 7
                break;
            case 'september':
                month = 8
                break;
            case 'october':
                month = 9
                break;
            case 'november':
                month = 10
                break;
            case 'december':
                month = 11
                break;
        }

        try {

            const sellingIn = await DistributorSelling.findAll({
                where: {
                    tgl_transaksi: {
                        [Op.between]: [new Date(year, month, 1), new Date(year, month, 31)]
                    }
                }
            })

            const sellingOut = await TokoSelling.findAll({
                where: {
                    tgl_transaksi: {
                        [Op.between]: [new Date(year, month, 1), new Date(year, month, 31)]
                    }
                }
            })

            res.status(200).json({
                sellingIn: sellingIn,
                sellingOut: sellingOut
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

    }

    static async addSellingIn(req, res) {
        const { idproduct } = req.params
        let counter = ''
        try {
            const findProduct = await MasterProduct.findOne({
                where: {
                    idproduct
                }
            })

            const findDistributorSelling = await DistributorSelling.findAll()
            if (!findProduct && !findDistributorSelling) {
                res.status(404).json("Product not found")
                res.end()
            }

            if (findDistributorSelling.length === 0) {
                counter = '1'
            } else {
                counter = String(findDistributorSelling.length += 1)
            }

            const result = await DistributorSelling.create({
                user: req.body.user,
                idproduct: findProduct.idproduct,
                stock: req.body.stock,
                no_faktur_distribusi: `ENS_${zeroPad(counter, 3)}`,
                tgl_transaksi: new Date()
            })

            if (!result) {
                res.status(400).json('Bad request')
                res.end()
            }

            const findMasterSelling = await StockSelling.findOne({
                where: {
                    user: result.user,
                    idproduct
                }
            })

            if (!findMasterSelling) {
                const addedSelling = await StockSelling.create({
                    user: result.user,
                    idproduct,
                    selling_in: result.stock
                })
                res.status(201).json({
                    selling_in: result,
                    updatedProduct: addedSelling
                })
            } else {
                console.log(findMasterSelling.selling_in, result)
                const updatedSelling = await StockSelling.update({
                    selling_in: parseInt(findMasterSelling.selling_in) + parseInt(result.stock),
                }, {
                    where: {
                        user: findMasterSelling.user,
                        idproduct
                    },
                    returning: true
                })
                res.status(201).json({
                    selling_in: result,
                    updatedProduct: updatedSelling[1][0]
                })
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async addSellingOut(req, res) {
        const { idproduct } = req.params
        let counter = ''
        try {
            const findProduct = await MasterProduct.findOne({
                where: {
                    idproduct
                }
            })

            const findTokoSelling = await TokoSelling.findAll()
            if (!findProduct && !findTokoSelling) {
                res.status(404).json("Product not found")
                res.end()
            }

            if (findTokoSelling.length === 0) {
                counter = '1'
            } else {
                counter = String(findTokoSelling.length += 1)
            }

            const result = await TokoSelling.create({
                user: req.body.user,
                idproduct: findProduct.idproduct,
                stock: req.body.stock,
                no_faktur_toko: `${req.body.user.toLowerCase()}_faktur${counter}`,
                tgl_transaksi: new Date()
            })

            if (!result) {
                res.status(400).json('Bad request')
                res.end()
            }

            const findMasterSelling = await StockSelling.findOne({
                where: {
                    user: result.user,
                    idproduct
                }
            })

            if (!findMasterSelling) {
                const addedSelling = await StockSelling.create({
                    user: result.user,
                    idproduct,
                    selling_out: result.stock
                })
                res.status(201).json({
                    selling_out: result,
                    updatedProduct: addedSelling
                })
            } else {
                console.log(findMasterSelling.selling_in, result)
                const updatedSelling = await StockSelling.update({
                    selling_out: parseInt(findMasterSelling.selling_out) + parseInt(result.stock),
                }, {
                    where: {
                        user: findMasterSelling.user,
                        idproduct
                    },
                    returning: true
                })
                res.status(201).json({
                    selling_out: result,
                    updatedProduct: updatedSelling[1][0]
                })
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = SellingController;