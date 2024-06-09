<div align="center">
    <h1>Sitdown App</h1>
    <image src="https://github.com/learsiOtni/sitdown-next-app/blob/main/src/assets/img/small-logo.png" alt="sitdown app logo">
    <br />
    <br />
    <p>A web app for managing projects in a team.</p>
    <a href="https://sitdown-next-app.vercel.app/login">
      <strong>View Demo</strong>
    </a>
</div>

## Description

![Sitdown App](src/assets/screenshot/dashboard.png) 

Sitdown app is a web application where users can create projects, add members to the projects, and the added members can post status updates about the project. 

### Technology stack

##### Front-End
* Next.js 
* Typescript
* Tailwind
* Redux
* ESLint
* Tiptap Editor
- Deployed with Vercel

##### Back-End:
* Node.js 
* Firebase Cloud Firestore Database
* Firebase Cloud Functions
- Deployed as Firebase Cloud Function

Turned my sisters design in [Adobe XD](https://xd.adobe.com/view/dd6bbf87-41bb-4196-a87b-15ebf31ff0bc-8838/specs/?fbclid=IwZXh0bgNhZW0CMTAAAR0ZRBR0ETV0urundu9y7qu-KMyMowjEfABJg3CIHEavuhO_jgvA7CUxJ64_aem_AdY8OcPzJJwmj7y5xdqCDrMPWNVUufNl25Osb5gHqtnEAPXI7RTzGHt03NDlDcCchEp8zpdGRt8U6VZBs5s5yuHN) into working code. 

### Features
* Pop-up form to add or edit status updates.
    * Tags validation. Remove duplicates and white spaces.
* Pop-up form to add or edit projects.
    * Custom Select Members Input
* Status updates view by current date. 
    * Provides table or card view options. 
* Change profile picture.
* Form validation at server side.




### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Add this to your .env.local
```sh
NEXT_PUBLIC_API_URL="https://us-central1-sitdown-834fc.cloudfunctions.net/api/"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can also clone the sitdown-nexp-app-functions found on my github repository, create a firebase project, login using your firebase credentials, navigate to functions, run npm run serve, and copy the link and replace the NEXT_PUBLIC_API_URL.
