const media = [
    {
      title: 'Kimberly Anderson - Account Specialist', 
      description: "Sales",
      type: 'Sales',
      contributor: '#156',
      showDetail: false,
      email: 'kimD@designcorp.com',
      img: 'women/76.jpg'
    },
    {
      title: 'Alex Duran - Lead Software Engineer', 
      description: "Technical",
      type: 'Technical',
      contributor: '#201',
      showDetail: false,
      email: 'alexduran@designcorp.com',
      img: 'men/85.jpg'
    },
    {
      title: 'Tonya Evers - Lead Designer', 
      description: "Design",
      type: 'Design',
      contributor: '#322',
      showDetail: false,
      email: 'tevers@designcorp.com',
      img: 'women/3.jpg'
    },
    {
      title: 'Philip Dimaggio - Account Specialist', 
      description: "Sales",
      type: 'Sales',
      contributor: '#167',
      showDetail: false,
      email: 'phildimaggio@designcorp.com',
      img: 'men/20.jpg'
    },
    {
      title: 'Rebecca Munoz - Designer', 
      description: "Design",
      type: 'Design',
      contributor: '#304',
      showDetail: false,
      email: 'beccaM@designcorp.com',
      img: 'women/2.jpg'
    },
    {
      title: 'Michelle Nivitzkovich- Software Engineer', 
      description: "Technical",
      type: 'Technical',
      contributor: '#241',
      showDetail: false,
      email: 'mLancaster@designcorp.com',
      img: 'women/52.jpg'
    },
    {
      title: 'Brad Oppenheimer- Account Speciaist', 
      description: "Sales",
      type: 'Sales',
      contributor: '#176',
      showDetail: false,
      email: 'boppenheimer@designcorp.com',
      img: 'men/61.jpg'
    },
    {
      title: 'Derek Randall - Jr. Software Engineer', 
      description: "Technical",
      type: 'Technical',
      contributor: '#277',
      showDetail: false,
      email: 'dQuigley@designcorp.com',
      img: 'men/37.jpg'
    },
    {
      title: 'Vanisse Rudillo - Administrative Assistant', 
      description: "Administration",
      type: 'Administration',
      contributor: '#412',
      showDetail: false,
      email: 'vanisser@designcorp.com',
      img: 'women/8.jpg'
    },
    {
      title: 'Stephanie Wilkerson - Office Manager', 
      description: "Administration",
      type: 'Administration',
      contributor: '#441',
      showDetail: false,
      email: 'stephwilk@designcorp.com',
      img: 'women/81.jpg'
    },
    {
      title: 'Denise Weiland - Senior Account Specialist', 
      description: "Sales",
      type: 'Sales',
      contributor: '#111',
      showDetail: false,
      email: 'dweiland@designcorp.com',
      img: 'women/65.jpg'
    }
  ]

const app = new Vue({
    el: '#media-list',
    data: {
      title: 'Employee Directory',
      mediaList: media,
      type: ''
    },
    methods:  {
      toggleDetails: function(media){
        media.showDetail = !media.showDetail
      },
      filterList: function(){
        this.type = event.target.value;
      }
    },
    computed: {
      uniqueItemsList: function(){
        const types = [];
        this.mediaList.forEach((item) =>{
          if(!types.includes(item.type)) {
            types.push(item.type);
          }
        });
        return types;
      }
    }
  });
