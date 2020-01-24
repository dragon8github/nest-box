import * as mongoose from 'mongoose'

export const ArticleSchema = new mongoose.Schema({
	title: String,
	keywords:String,
	author: Number,
	status: String,
})