import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import connetDb from '@/db/connectDb';
import User from '@/modales/user.js';

const authOptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
   secret : process.env.NEXTAUTH_SECRET , 
   callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider==="github") {
        await connetDb();
        const findUser = await User.findOne({email:user.email});
        if(!findUser){
           const newUser = await User.create({
                email : user.email,
                username : user.name,
            });
        }
      }   
      return true;
    }
   }
})

export { authOptions as GET, authOptions as POST };