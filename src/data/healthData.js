const healthData = {
  anatomyIndicators: [
    {
      organ: "Heart",
      status: "Healthy",
      color: "green",
      position: { top: "20%", left: "45%" },
    },
    {
      organ: "Lungs",
      status: "Needs Attention",
      color: "red",
      position: { top: "30%", left: "50%" },
    },
    {
      organ: "Teeth",
      status: "Healthy",
      color: "green",
      position: { top: "10%", left: "48%" },
    },
    {
      organ: "Bone",
      status: "Fractured",
      color: "orange",
      position: { top: "70%", left: "47%" },
    },
  ],

  healthStatusCards: [
    {
      title: "Lungs",
      lastChecked: "October 15, 2019",
      status: "Needs Attention",
    },
    {
      title: "Teeth",
      lastChecked: "October 12, 2019",
      status: "Healthy",
    },
    {
      title: "Bone",
      lastChecked: "October 10, 2019",
      status: "Fractured",
    },
  ],
};

export default healthData;
