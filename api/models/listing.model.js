import mongoose from "mongoose";
/**
 * Creates a new Mongoose schema for a listing.
 * @param {object} schema - The schema object.
 * @param {string} schema.name - The name of the listing.
 * @param {string} schema.description - The description of the listing.
 * @param {string} schema.address - The address of the listing.
 * @param {number} schema.regularPrice - The regular price of the listing.
 * @param {number} schema.discountPrice - The discounted price of the listing.
 * @param {number} schema.bathrooms - The number of bathrooms in the listing.
 * @param {number} schema.bedrooms - The number of bedrooms in the listing.
 * @param {boolean} schema.furnished - A boolean indicating whether the listing is furnished or not.
 * @param {boolean} schema.parking - A boolean indicating whether the listing has parking or not.
 * @param {string} schema.type - The type of the listing (e.g. apartment, house, etc.).
 * @param {boolean} schema.offer - A boolean indicating whether the listing is an offer or not.
 * @param {array} schema.imageUrls - An array of URLs to images of the listing.
 * @param {string} schema.userRef - The reference to the user who posted the listing.
 * @param {object} options - The options object.
 * @param {boolean} [options.timestamps=true] - A boolean indicating whether to include timestamps or not.
 */
const listingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        regularPrice: {
            type: Number,
            required: true,
        },
        discountPrice: {
            type: Number,
            required: true,
        },
        bathrooms: {
            type: Number,
            required: true,
        },
        bedrooms: {
            type: Number,
            required: true,
        },
        furnished: {
            type: Boolean,
            required: true,
        },
        parking: {
            type: Boolean,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        offer: {
            type: Boolean,
            required: true,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

/**
 * Creates a model for a listing using the provided schema.
 * @param {string} name - The name of the model.
 * @param {object} schema - The schema object.
 * @returns {Model} The model instance.
 */
const Listing = mongoose.model('Listing', listingSchema);

/**
 * Exports the Listing model.
 * @type {Model}
 */
export default Listing;