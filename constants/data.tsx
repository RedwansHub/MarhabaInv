export const data = [
    {id: 1, desc: 'Dedication to our clients’ individual needs.', name: 'Commitment'},
    {id: 2, desc: 'Creative and positive approach to investment.', name: 'Innovation'},
    {id: 3, desc: 'Any difficulties can be overcame through teamwork and trust.',  name: 'Collaboration and Trust'},
    {id: 4, desc: 'We believe that the workforce is the greatest asset of any organization.', name: 'Empowerment'},
    {id: 5, desc: 'Integrity, full compliance, Sharia principles.', name: 'Ethics Transparency'},
    {id: 6, desc: 'We strive to provide outstanding care, support, and assistance to our clients.', name: 'Excellent care'},
]

export const slideUp0 = {
    initial: {
        y: "100%"
    },
    open: (i: any) => ({
        y: "0%",
        transition: {duration: 1.5, delay: 0.05 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 1.5}
    }
  }


export const OurClients = [
    {id: 1, size: 100, src: '/Images/Logo/Clients/DalsanIndustry.png'},
    {id: 2, size: 110, src: '/Images/Logo/Clients/MarhabaWater.png'},
    {id: 3, size: 200, src: '/Images/Logo/Clients/MarhabaEstate.png'},
    {id: 4, size: 180, src: '/Images/Logo/Clients/Unicare.png'},
    {id: 5, size: 350, src: '/Images/Logo/Clients/MarhabAgro.png'},
    {id: 6, size: 170, src: '/Images/Logo/Clients/MarhabaTissues.png'},
]