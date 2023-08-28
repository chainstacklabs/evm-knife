import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { address } = req.query;
    try {
      const contractData = await getContractData(
        address,
        process.env.ETHERSCAN_API
      );
      res.status(200).json(contractData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).end();
  }
}

async function getContractData(address, apiKey) {
  const params = {
    module: "contract",
    action: "getsourcecode",
    address: address,
    apikey: apiKey,
  };

  try {
    const response = await axios.get("https://api.etherscan.io/api", {
      params,
    });

    const {
      SourceCode,
      ABI,
      ContractName,
      CompilerVersion,
      OptimizationUsed,
      Runs,
      ConstructorArguments,
      EVMVersion,
      Library,
      LicenseType,
      Proxy,
      Implementation,
      SwarmSource,
    } = response.data.result[0];

    console.log(`Contract address ${address}`);
    console.log(`Contract name ${ContractName}`);

    return {
      SourceCode,
      ABI,
      ContractName,
      CompilerVersion,
      OptimizationUsed,
      Runs,
      ConstructorArguments,
      EVMVersion,
      Library,
      LicenseType,
      Proxy,
      Implementation,
      SwarmSource,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch contract data");
  }
}
