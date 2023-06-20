import {
  DefaultButton,
  DetailsListLayoutMode,
  DetailsRow,
  IColumn,
  IDetailsListProps,
  IDetailsRowProps,
  IDetailsRowStyles,
  IconButton,
  Position,
  SelectionMode,
  ShimmeredDetailsList,
  SpinButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { Pagination } from "@fluentui/react-experiments";
import { getTheme } from "@fluentui/react/lib/Styling";
import React, { useState } from "react";
import { API } from "../api/API";
import { FormModal } from "../components/FormModal";
import { IMockDataModel } from "../model/MockDataModel";
import { copyAndSort } from "../utilities/Services";
import { initializedMockData, defaultData } from "../mock-data/MockData";

const theme = getTheme();

interface IDataListProps {}

export const DataList: React.FC<IDataListProps> = () => {
  const [items, setItems] = useState<IMockDataModel[]>([]);
  const [sortedColumn, setSortedColumn] = useState<IColumn | null>(null);
  const [isSortedDescending, setIsSortedDescending] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isModalHidden, setModalHidden] = useState<boolean>(true);
  const [shimmer, setShimmer] = useState<boolean>(true);
  const [formInputs, setFormInputs] =
    useState<IMockDataModel>(initializedMockData);

  const suffix = " rows";
  const min = 0;
  const max = 100;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getAll("/account");
        setItems(response?.data.payload);
        setShimmer(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [defaultData]);

  const onPostData = async (url: string, data: IMockDataModel) => {
    try {
      const postData = await API.post(url, data);
      setItems(postData?.data.payload);
    } catch (error) {
      console.error(error);
    }
  };

  /** Sorting when click to column header */
  const onColumnClick = (
    ev: React.MouseEvent<HTMLElement>,
    column: IColumn
  ): void => {
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(
      (currCol) => column.key === currCol.key
    )[0];

    const newIsSortedDescending =
      sortedColumn && sortedColumn.key === currColumn.key
        ? !isSortedDescending
        : false;

    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        newCol.isSorted = true;
        newCol.isSortedDescending = newIsSortedDescending;
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = false;
      }
    });

    const newItems = copyAndSort(
      items,
      currColumn.fieldName!,
      newIsSortedDescending
    );

    setItems(newItems);
    setSortedColumn(currColumn);
    setIsSortedDescending(newIsSortedDescending);
  };

  /** Column headers */
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Sosyal Medya Linki",
      fieldName: "link",
      minWidth: 100,
      maxWidth: 500,
      data: "string",
      isSorted: sortedColumn?.key === "column1",
      isSortedDescending: isSortedDescending,
      onColumnClick: onColumnClick,
    },
    {
      key: "column2",
      name: "Sosyal Medya Adı",
      fieldName: "socialMedia",
      maxWidth: 500,
      minWidth: 100,
      data: "string",
      isSorted: sortedColumn?.key === "column2",
      isSortedDescending: isSortedDescending,
      onColumnClick: onColumnClick,
    },
    {
      key: "column3",
      name: "Açıklama",
      fieldName: "description",
      maxWidth: 500,
      minWidth: 100,
      data: "string",
      isSorted: sortedColumn?.key === "column3",
      isSortedDescending: isSortedDescending,
      onColumnClick: onColumnClick,
    },
  ];

  /** each row has a different color */
  const onRenderRow: IDetailsListProps["onRenderRow"] = (
    props: IDetailsRowProps | undefined
  ) => {
    const customStyles: Partial<IDetailsRowStyles> = {};
    if (props) {
      if (props.itemIndex % 2 !== 0) {
        customStyles.root = { backgroundColor: theme.palette.themeLighterAlt };
      }
      return <DetailsRow {...props} styles={customStyles} />;
    }
    return null;
  };

  /** Remove the suffix or any other text after the numbers, or return undefined if not a number */
  const getNumericPart = (value: string): number | undefined => {
    const valueRegex = /^(\d+(\.\d+)?).*/;
    if (valueRegex.test(value)) {
      const numericValue = Number(value.replace(valueRegex, "$1"));
      return isNaN(numericValue) ? undefined : numericValue;
    }
    return undefined;
  };

  /** Increment the value (or return nothing to keep the previous value if invalid) */
  const onIncrement = (
    value: string,
    event?: React.SyntheticEvent<HTMLElement>
  ): string | void => {
    const numericValue = getNumericPart(value);
    if (numericValue !== undefined) {
      return String(Math.min(numericValue + 2, max)) + suffix;
    }
  };

  /** Decrement the value (or return nothing to keep the previous value if invalid) */
  const onDecrement = (
    value: string,
    event?: React.SyntheticEvent<HTMLElement>
  ): string | void => {
    const numericValue = getNumericPart(value);
    if (numericValue !== undefined) {
      return String(Math.max(numericValue - 2, min)) + suffix;
    }
  };

  /**
   * Clamp the value within the valid range (or return nothing to keep the previous value
   * if there's not valid numeric input)
   */
  const onValidate = (
    value: string,
    event?: React.SyntheticEvent<HTMLElement>
  ): string | void => {
    let numericValue = getNumericPart(value);
    if (numericValue !== undefined) {
      numericValue = Math.min(numericValue, max);
      numericValue = Math.max(numericValue, min);
      return String(numericValue) + suffix;
    }
  };

  /** This will be called after each change */
  const onChange = (
    event: React.SyntheticEvent<HTMLElement>,
    value?: string
  ): void => {
    console.log("Value changed to " + value);
  };

  return (
    <div className="data-list-container">
      <Stack
        className="data-list-action-container"
        horizontal
        horizontalAlign="space-between"
      >
        <Stack className="data-list-action-inner-container" horizontal>
          <TextField
            borderless
            iconProps={{
              iconName: "Zoom",
              styles: {
                root: {
                  display: "flex",
                  width: 38,
                  bottom: 0,
                  right: -10,
                  top: 0,
                  fontSize: "20px",
                  backgroundColor: "#744bfc",
                  color: "white",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                  pointerEvents: "auto",
                  cursor: "pointer",
                },
              },
              onClick: () => {
                console.log("searching ...");
              },
            }}
            styles={{
              fieldGroup: {
                border: "none",
                borderBottomLeftRadius: 25,
                borderTopLeftRadius: 25,
                display: "flex",
                alignItems: "center",
                paddingLeft: 8,
              },
            }}
            placeholder="Search objects..."
          />
          <IconButton
            iconProps={{
              iconName: "FilterSolid",
            }}
            onClick={() => {}}
            styles={{
              root: {
                backgroundColor: "white",
                borderRadius: 25,
                width: 50,
                marginLeft: 20,
              },
              icon: { color: "#744bfc", fontSize: 20 },
            }}
          />
        </Stack>
        <Stack className="new-account-btn">
          <DefaultButton
            text="Yeni Hesap Ekle"
            iconProps={{ iconName: "Add" }}
            styles={{
              root: {
                color: "white",
                backgroundColor: "#744bfc",
                borderRadius: 25,
              },
            }}
            onClick={() => {
              setModalHidden(false);
            }}
          />
        </Stack>
      </Stack>
      <ShimmeredDetailsList
        items={items}
        setKey="items"
        // getKey={(item: IMockDataModel) => {
        //   return item.id;
        // }}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        onRenderRow={onRenderRow}
        enableShimmer={shimmer}
      />
      <Stack
        horizontal
        horizontalAlign="space-between"
        styles={{ root: { marginTop: 20 } }}
      >
        <Stack>
          <SpinButton
            label="Show:"
            defaultValue={"4" + suffix}
            min={min}
            max={max}
            onValidate={onValidate}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            incrementButtonIcon={{
              iconName: "TriangleSolidUp12",
            }}
            decrementButtonIcon={{
              iconName: "TriangleSolidDown12",
            }}
            onChange={onChange}
            incrementButtonAriaLabel="Increase value by 2"
            decrementButtonAriaLabel="Decrease value by 2"
            styles={{
              label: {
                color: "#744bfc",
              },
              root: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: 180,
              },
              spinButtonWrapper: {
                borderRadius: 20,
                paddingLeft: 10,
                paddingRight: 8,
                height: 36,
                selectors: {
                  ":after": { borderRadius: 20 },
                },
              },
            }}
            labelPosition={Position.start}
          />
        </Stack>
        <Pagination
          selectedPageIndex={pageIndex}
          styles={{ visibleItemLabel: { display: "none" } }}
          pageCount={27}
          itemsPerPage={10}
          totalItemCount={268}
          format={"buttons"}
          onPageChange={(index: number) => {
            setPageIndex(index);
          }}
        />
        <FormModal
          processing={false}
          hidden={isModalHidden}
          onCancel={() => {
            setFormInputs(initializedMockData);
            setModalHidden(true);
          }}
          onConfirm={() => {
            onPostData("/account", formInputs);
            setFormInputs(initializedMockData);
            setModalHidden(true);
          }}
        >
          <Stack verticalFill>
            <TextField
              label="Sosyal Medya Linki"
              styles={{
                fieldGroup: {
                  borderRadius: 38,
                  border: "1px solid #D9D9D9",
                  marginBottom: 15,
                },
              }}
              onChange={(e, value) => (formInputs.link = value ? value : "")}
            />
            <TextField
              label="Sosyal Medya Adı"
              styles={{
                fieldGroup: {
                  borderRadius: 38,
                  border: "1px solid #D9D9D9",
                  marginBottom: 15,
                },
              }}
              onChange={(e, value) =>
                (formInputs.socialMedia = value ? value : "")
              }
            />
            <TextField
              label="Açıklama"
              styles={{
                fieldGroup: { borderRadius: 38, border: "1px solid #D9D9D9" },
              }}
              onChange={(e, value) =>
                (formInputs.description = value ? value : "")
              }
            />
          </Stack>
        </FormModal>
      </Stack>
    </div>
  );
};
