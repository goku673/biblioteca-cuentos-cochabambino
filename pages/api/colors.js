export default async (req,res) => {

    const data = [
        {
          id: 1,
          province: "Cercado",
          colors: ["#8326de", "#7373e5"]
        },
        {
          id: 2,
          province: "Ayopapa",
          colors: ["#5f1883", "#831c83", "#bb1d82"]
        },
        {
          id: 3,
          province: "Tapacari",
          colors: ["#e05be0", "#efa3c5"]
        },
        {
          id: 4,
          province: "Arque",
          colors: ["#b8374f", "#6f5f37", "#e7e74f"]
        },
        {
          id: 5,
          province: "Bolivar",
          colors: ["#2de3bb", "#61de56"]
        },
        {
          id: 6,
          province: "Quillacollo",
          colors: ["#0c7fef", "#0eacf6"]
        },
        {
          id: 7,
          province: "Germán Jordan",
          colors: ["#c22727", "#fc760c"]
        },
        {
          id: 8,
          province: "Punata",
          colors: ["#3c4cb6", "#0eacf6"]
        },
        {
          id: 9,
          province: "Campero",
          colors: ["#fc760c", "#fabd1d"]
        },
        {
          id: 10,
          province: "Jose Carrasco",
          colors: ["#13555b", "#326c62", "#b0e44e"]
        },
        {
          id: 11,
          province: "Tiraque",
          colors: ["#b8374f", "#e07483"]
        },
        {
          id: 12,
          province: "Mizque",
          colors: ["#3c9656", "#5b8f63"]
        },
        {
          id: 13,
          province: "Esteban Arce",
          colors: ["#6f5f37", "#d8c924", "#e7e74f"]
        },
        {
          id: 14,
          province: "Chapare",
          colors: ["#34db4c", "#80e050", "#c4eb4c"]
        },
        {
          id: 15,
          province: "Capinota",
          colors: ["#c22727", "#fc664f"]
        },
        {
          id: 16,
          province: "Arani",
          colors: ["#61de56", "#2de3bb"]
        }
      ];

      res.status(200).json(data);
}