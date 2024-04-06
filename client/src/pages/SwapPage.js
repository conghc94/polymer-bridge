import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import {
  LockClosedIcon,
} from "@heroicons/react/24/solid";


export default function SwapPage() {
  const [type, setType] = React.useState("deposit");

  return (
    <Card className="w-full max-w-[24rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-3 text-center"
      >
        <Typography variant="h5" color="white">
          Polymer Swap
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0">
            <Tab value="deposit" onClick={() => setType("deposit")}>
              Deposit
            </Tab>
            <Tab value="withdraw" onClick={() => setType("withdraw")}>
              Withdraw
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "deposit" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "deposit" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="deposit" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <Card className="" style={{ backgroundColor: 'rgb(238, 234, 244)'}}>
                  <CardBody>
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        From
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          >
                            <option>ETH</option>
                            <option>USDT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="" style={{ backgroundColor: 'rgb(238, 234, 244)' }}>
                  <CardBody>
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        To
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          >
                            <option>USDT</option>
                            <option>ETH</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </CardBody>

                </Card>
                <Button size="lg">Switch</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Please ensure you are connected to MetaMask.
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="withdraw" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <Card className="" style={{ backgroundColor: 'rgb(238, 234, 244)' }}>
                  <CardBody>
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        From
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          >
                            <option>ETH</option>
                            <option>USDT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="" style={{ backgroundColor: 'rgb(238, 234, 244)' }}>
                  <CardBody>
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        To
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          >
                            <option>USDT</option>
                            <option>ETH</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </CardBody>

                </Card>
                <Button size="lg">Switch</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Please ensure you are connected to MetaMask.
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
