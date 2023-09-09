import { createContext, PropsWithChildren, useContext } from 'react';

import { IdbDataService } from '../services/data/IdbDataService';

const dataService = new IdbDataService();

const DataServiceContext = createContext(dataService);

export const DataServiceProvider = ({ children }: PropsWithChildren) => {
  return (
    <DataServiceContext.Provider value={dataService}>
      {children}
    </DataServiceContext.Provider>
  );
};

export const useDataService = () => useContext(DataServiceContext);
