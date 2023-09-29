import React from 'react'

export default function mail() {
    const Mailto = ({ email, subject, body, children }) => {
        return (
          <a className="px-2 my-4 text-fourth text-lg hover:text-third" href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
        );
      };
      
    

  return (
    <>
    <Mailto email="mans.englund@live.se" subject="I'd like to connect" body="" >
        Contact
    </Mailto>
    </>
  )
}
