function sort(table, by) {
    const tables = table.slice();
    switch (by) {
      case "weight_asc":
        tables.sort((a, b) => {
          const weightA = a.weight;
          const weightB = b.weight;
          if (weightA < weightB) {
            return -1;
          }
          if (weightA > weightB) {
            return 1;
          }
          return 0;
        });
        break;
      case "weight_desc":
        tables.sort((a, b) => {
          const weightA = a.weight;
          const weightB = b.weight;
          if (weightA < weightB) {
            return 1;
          }
          if (weightA > weightB) {
            return -1;
          }
          return 0;
        });
        break;
      case "milk_asc":
        tables.sort(function (a, b) {
          return new Date(a.total_milk) - new Date(b.total_milk);
        });
        break;
      case "milk_desc":
        tables.sort(function (a, b) {
          return new Date(b.total_milk) - new Date(a.total_milk);
        });
        break;
      default:
    }
    return tables;
  }
  export default sort;