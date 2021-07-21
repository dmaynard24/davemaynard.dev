import * as React from 'react';

const Contact: React.FC = () => (
  <>
    <p>
      <a href="mailto:davemaynard24@gmail.com">Send Email</a>
      <br />
      <a href="/assets/Dave_Maynard_Resume_2020.pdf" download>
        View Resume
      </a>
    </p>
  </>
);
Contact.displayName = 'Contact';

export default Contact;
