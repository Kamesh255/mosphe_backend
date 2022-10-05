import mongoose from "mongoose"


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://kamesh:${password}@cluster0.ezdkdgq.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected Secessfully")
    } catch (err) {
        console.log(`Error while connecting with the database`, err.message)
    }
}
export default Connection