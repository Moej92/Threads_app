import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    bio: { type: String, required: true },
    threads: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thread"
        }
    ],
    onboarded: { type: Boolean, default: false },
    communities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Community"
        }
    ]
});


const User = models.User || model("User", UserSchema);

export default User;
