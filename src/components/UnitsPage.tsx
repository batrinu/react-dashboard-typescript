const mockUnitsData = {
  count: 2,
  units: [
    {
      name: "Controller 1",
      unitGuid: "gensete5ffa1149c0c85b9a4238f8a2e812130",
      url: "https://websupervisor.azure-api.net/api/v1/units/gensete5ffa1149c0c85b9a4238f8a2e812130",
    },
    {
      name: "Controller 2",
      unitGuid: "gensete5ffa5976c0c85b9a3597f8c2e81a78b",
      url: "https://websupervisor.azure-api.net/api/v1/units/gensete5ffa5976c0c85b9a3597f8c2e81a78b",
    },
  ],
};

const UnitsPage = () => {
  const { units } = mockUnitsData; // Assuming you'd replace this with a state filled by an API call

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Units</h1>
      <div className="space-y-4">
        {units.map((unit) => (
          <div
            key={unit.unitGuid}
            className="bg-white shadow-lg rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold">{unit.name}</h2>
            <p>GUID: {unit.unitGuid}</p>
            <a
              href={unit.url}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Unit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitsPage;
