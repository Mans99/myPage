import React from 'react'

export default function mail() {
    const Mailto = ({ email, subject, body, children }) => {
        return (
          <a className="hover:text-third" href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
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
