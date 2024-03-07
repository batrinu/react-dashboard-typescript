import GaugeComponent from "react-gauge-component";

const mockUnitData = {
  name: "Controller 1",
  unitGuid: "gensete5ffa1149c0a78b4a5798f8a2e812130",
  ownerLoginId: "user_1",
  applicationType: "Rental",
  timezone: "Europe/Prague",
  connection: {
    enabled: true,
    airGateId: "eC6M9w2",
    ipAddress: "",
    port: 0,
    controllerAddress: 1,
  },
  position: {
    positionType: "Static",
    latitude: "50.10694",
    longitude: "14.45333",
  },
};

const UnitDetail = ({ unit = mockUnitData }) => {
  return (
    <div className="flex">
      <div className="flex-col max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{unit.name}</h2>
        <div className="space-y-2">
          <p>
            <strong>GUID:</strong> {unit.unitGuid}
          </p>
          <p>
            <strong>Owner Login ID:</strong> {unit.ownerLoginId}
          </p>
          <p>
            <strong>Application Type:</strong> {unit.applicationType}
          </p>
          <p>
            <strong>Timezone:</strong> {unit.timezone}
          </p>
          <div>
            <h3 className="font-semibold">Connection</h3>
            <p>
              <strong>Enabled:</strong> {unit.connection.enabled ? "Yes" : "No"}
            </p>
            <p>
              <strong>AirGate ID:</strong> {unit.connection.airGateId}
            </p>
            <p>
              <strong>IP Address:</strong> {unit.connection.ipAddress || "N/A"}
            </p>
            <p>
              <strong>Port:</strong> {unit.connection.port}
            </p>
            <p>
              <strong>Controller Address:</strong>{" "}
              {unit.connection.controllerAddress}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Position</h3>
            <p>
              <strong>Position Type:</strong> {unit.position.positionType}
            </p>
            <p>
              <strong>Latitude:</strong> {unit.position.latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {unit.position.longitude}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:scale-105 shadow-lg">
            View Values
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:scale-105 shadow-lg">
            View Files
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:scale-105 shadow-lg">
            View History
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:scale-105 shadow-lg">
            View Permissions
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <GaugeComponent />
        <GaugeComponent
          arc={{
            subArcs: [
              {
                limit: 20,
                color: "#EA4228",
                showTick: true,
              },
              {
                limit: 40,
                color: "#F58B19",
                showTick: true,
              },
              {
                limit: 60,
                color: "#F5CD19",
                showTick: true,
              },
              {
                limit: 100,
                color: "#5BE12C",
                showTick: true,
              },
            ],
          }}
          value={50}
        />
        <GaugeComponent
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            // gradient: true,
            subArcs: [
              {
                limit: 15,
                color: "#EA4228",
                showTick: true,
                tooltip: {
                  text: "Too low temperature!",
                },
                onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                onMouseMove: () =>
                  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
                onMouseLeave: () =>
                  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
              },
              {
                limit: 17,
                color: "#F5CD19",
                showTick: true,
                tooltip: {
                  text: "Low temperature!",
                },
              },
              {
                limit: 28,
                color: "#5BE12C",
                showTick: true,
                tooltip: {
                  text: "OK temperature!",
                },
              },
              {
                limit: 30,
                color: "#F5CD19",
                showTick: true,
                tooltip: {
                  text: "High temperature!",
                },
              },
              {
                color: "#EA4228",
                tooltip: {
                  text: "Too high temperature!",
                },
              },
            ],
          }}
          pointer={{
            color: "#345243",
            length: 0.8,
            width: 15,
            // elastic: true,
          }}
          labels={{
            valueLabel: { formatTextValue: (value) => value + "ºC" },
            tickLabels: {
              type: "outer",

              ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
            },
          }}
          value={22.5}
          minValue={10}
          maxValue={35}
        />
        <GaugeComponent
          type="semicircle"
          arc={{
            colorArray: ["#00FF15", "#FF2121"],
            padding: 0.02,
            subArcs: [
              { limit: 40 },
              { limit: 60 },
              { limit: 70 },
              {},
              {},
              {},
              {},
            ],
          }}
          pointer={{ type: "blob", animationDelay: 0 }}
          value={50}
        />
        <GaugeComponent
          id="gauge-component4"
          arc={{
            gradient: true,
            width: 0.15,
            padding: 0,
            subArcs: [
              {
                limit: 15,
                color: "#EA4228",
                showTick: true,
              },
              {
                limit: 37,
                color: "#F5CD19",
                showTick: true,
              },
              {
                limit: 58,
                color: "#5BE12C",
                showTick: true,
              },
              {
                limit: 75,
                color: "#F5CD19",
                showTick: true,
              },
              { color: "#EA4228" },
            ],
          }}
          value={50}
          pointer={{ type: "arrow", elastic: true }}
        />
        <GaugeComponent
          value={50}
          type="radial"
          labels={{
            tickLabels: {
              type: "inner",
              ticks: [
                { value: 20 },
                { value: 40 },
                { value: 60 },
                { value: 80 },
                { value: 100 },
              ],
            },
          }}
          arc={{
            colorArray: ["#5BE12C", "#EA4228"],
            subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
            padding: 0.02,
            width: 0.3,
          }}
          pointer={{
            elastic: true,
            animationDelay: 0,
          }}
        />
      </div>
    </div>
  );
};

export default UnitDetail;
