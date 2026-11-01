// Site credit in the footer and WebSite JSON-LD.
export const developer = {
  name: "Prabish Dangi",
  email: "prabishdc2002@gmail.com",
  github: "https://github.com/prabish01",
  linkedin: "https://www.linkedin.com/in/prabish-dangi-04a649211/",
  // Same @id on every site I build so search engines merge them into one person.
  id: "https://github.com/prabish01#person",
  // Other sites I've built; listed in sameAs to link them together.
  otherSites: [
    "https://www.nepalmedinfo.com",
    "https://www.budcompare.com",
    "https://www.dsgardeningservices.co.uk",
    "https://www.theborrowingbureau.com",
  ],
};

// schema.org Person for the WebSite JSON-LD "creator".
export const developerPerson = {
  "@type": "Person",
  "@id": developer.id,
  name: developer.name,
  url: developer.linkedin,
  email: developer.email,
  sameAs: [developer.linkedin, developer.github, ...developer.otherSites],
};
