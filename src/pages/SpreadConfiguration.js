import { useEffect, useState } from "react";
import { RiCheckboxCircleFill, RiDeleteBinLine } from 'react-icons/ri';
import { TableHeader } from "../components/TableHeader";

import { api, fetchSpreads } from "../service/api";
import * as S from "./styles";

export function SpreadConfigurationPage() {
  const [workingHours, setWorkingHours] = useState([]);
  const [nightShift, setNightShift] = useState([]);

  const loadSpreads = async () => {
    const { nightShift: nightShiftData, workingHours: workingHoursData } = await fetchSpreads();

    setWorkingHours(workingHoursData);
    setNightShift(nightShiftData);
  }

  const handleRefreshSpreads = async () => {
    loadSpreads();
  }

  const handleAddRange = async () => {
    await api.post("/spreads");
  };

  const handleDeleteSpread = (id) => {
    
  }

  useEffect(() => {
    loadSpreads();
  }, []);

  return(
    <S.Main>
      <section>
        <h1>SpreadConfiguration</h1>

        <S.ButtonsContainer>
          <S.Button onClick={handleRefreshSpreads}>REFRESH SPREAD VALUES</S.Button>
          <S.Button style={{ marginLeft: "0.5rem", background: "#4a9f4a" }} onClick={handleAddRange}>ADD RANGE</S.Button>
        </S.ButtonsContainer>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <S.SpreadTypeTitleBox>
          <h4>WORKING HOURS</h4>
        </S.SpreadTypeTitleBox>
        <S.SpreadTable>
          <TableHeader />

          <tbody>
            {workingHours.map((item) => {
              const sideColor = item.side === "BUY" ? "#33b088" : "#ff685d";
              return(
                <tr style={{ background: "#272727" }} key={item.id}>
                  <S.DefaultDataComponent>
                    <span>{item.accountId}</span>
                  </S.DefaultDataComponent>
                  <S.DefaultDataComponent>
                    <span>{item.symbol}</span>
                  </S.DefaultDataComponent>
                  <S.DefaultDataComponent>
                    <span style={{ color: sideColor }}>{item.side}</span>
                  </S.DefaultDataComponent>
                  <S.LightGreyDataComponent>
                    <span>{item.notionalFrom}</span>
                  </S.LightGreyDataComponent>
                  <S.LightGreyDataComponent>
                    <span>{item.notionalFrom}</span>
                  </S.LightGreyDataComponent>
                  <S.LightGreyDataComponent>
                    <span>{item.spreadPercentil}</span>
                  </S.LightGreyDataComponent>
                  <S.DefaultDataComponent>
                    <RiCheckboxCircleFill color="#cccccc" style={{ cursor: "pointer" }} />
                  </S.DefaultDataComponent>
                  <S.DefaultDataComponent>
                    <RiDeleteBinLine color="#ff685d" style={{ cursor: "pointer" }} onClick={handleDeleteSpread} />
                  </S.DefaultDataComponent>
                </tr>
              );
            })}
          </tbody>
        </S.SpreadTable>
      </section>

      <section style={{ "marginTop": "1.5rem" }}>
        <S.SpreadTypeTitleBox>
          <h4>NIGHT SHIFT</h4>
        </S.SpreadTypeTitleBox>

        <S.SpreadTable>
          <TableHeader />

          <tbody>
            {nightShift.map((item) => {
              const sideColor = item.side === "BUY" ? "#33b088" : "#ff685d";
              return(
                <tr style={{ background: "#272727" }} key={item.id}>
                  <S.DefaultDataComponent>
                    <span>{item.accountId}</span>
                  </S.DefaultDataComponent>
                  <S.DefaultDataComponent>
                    <span>{item.symbol}</span>
                  </S.DefaultDataComponent>
                  <S.DefaultDataComponent>
                    <span style={{ color: sideColor }}>{item.side}</span>
                  </S.DefaultDataComponent>
                  <S.LightGreyDataComponent>
                    <span>{item.notionalFrom}</span>
                  </S.LightGreyDataComponent>
                  <S.LightGreyDataComponent>
                    <span>{item.notionalFrom}</span>
                  </S.LightGreyDataComponent>
                  <S.LightGreyDataComponent>
                    <span>{item.spreadPercentil}</span>
                  </S.LightGreyDataComponent>
                  <S.DefaultDataComponent>
                    <RiCheckboxCircleFill color="#cccccc" style={{ cursor: "pointer" }} />
                  </S.DefaultDataComponent>
                  <S.DefaultDataComponent>
                    <RiDeleteBinLine color="#ff685d" style={{ cursor: "pointer" }} />
                  </S.DefaultDataComponent>
                </tr>
              );
            })}
          </tbody>
        </S.SpreadTable>
      </section>
    </S.Main>
  );
}