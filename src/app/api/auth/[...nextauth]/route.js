import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "yourname@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const users = [
          {
            id: 1,
            name: "Abhinandan Kumar",
            email: "abhinandank415@gmail.com",
            password: "Abhinandan@123",
          },
          {
            id: 2,
            name: "Happy Singh",
            email: "happysingh0836@gmail.com",
            password: "Happy@123",
          },
          {
            id: 3,
            name: "Ujjawal Kumar",
            email: "ujjawalprakash2273@gmail.com",
            password: "Ujjawal@123",
          },
        ];
        const { email, password } = credentials;

        const user = users.find((user) => user.email === email);

        if (!user) throw new Error("You are not registered.");
        if (user.password !== password)
          throw new Error("Incorrect Credentials.");

        return user;
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
