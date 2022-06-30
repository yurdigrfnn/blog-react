import { useEffect } from 'react';

export default function Profile() {
  useEffect(function() {
    document.title = 'Profile';
}, []);
  return (
    <section className="container mx-auto md:w-10/12 w-11/12 pt-9">
    <div>
        <h1 className="w-full text-green-600 md:font-bold md:text-3xl font-semibold text-2xl">Profile</h1>
    </div>
</section>
  );
}