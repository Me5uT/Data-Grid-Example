import { FilterBuilder } from "devextreme-react";
import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
} from "devextreme-react/data-grid";
import { mockData } from "../mock-data/MockData";

interface IDataListProps {}

const DataList = () => {
  return (
    <div className="data-list-container">
      <DataGrid
        dataSource={mockData}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        keyExpr={"id"}
      >
        <SearchPanel visible={true} highlightCaseSensitive={false} />
        <FilterBuilder />
        <Column
          dataField="socialMediaLink"
          caption="Sosyal Media Linki"
          dataType="string"
        />
        <Column
          dataField="socialMedia"
          caption="Sosyal Medya Adı"
          dataType="string"
        />
        <Column dataField="description" caption="Açıklama" dataType="string" />
        <Pager
          allowedPageSizes={[10, 25, 50, 100]}
          showPageSizeSelector={true}
        />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
};

export default DataList;
