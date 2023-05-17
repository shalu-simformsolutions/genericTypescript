import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// interface Item {
//   id: number;
//   name: string;
// }

// interface DropDownMultiSelectProps<T extends Item> {
//   items: T[];
//   selectedItems: T[];
//   onSelect: (selectedItems: T[]) => void;
// }

// const DropDownMultiSelect = <T extends Item>({
//   items,
//   selectedItems,
//   onSelect,
// }: DropDownMultiSelectProps<T>) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSelect = (item: T) => {
//     const isSelected = selectedItems?.find(
//       selectedItem => selectedItem.id === item.id,
//     );
//     console.log('isSelected>>>>',isSelected);
    
//     if (isSelected) {
//       console.log('if>>>>>');

//       const filteredItems = selectedItems.filter(
//         selectedItem => selectedItem.id !== item.id,
//       );
//       onSelect(filteredItems);
//     } else {
//       console.log('else>>>>>');
      
//       const updatedItems = [...selectedItems, item];
//       onSelect(updatedItems);
//     }
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => setIsOpen(!isOpen)}
//         style={{backgroundColor: 'pink', padding: 10}}>
//         <Text style={{fontSize: 20}}>Open Dropdown</Text>
//       </TouchableOpacity>
//       {isOpen && (
//         <View>
//           {items?.map(item => (
//             <TouchableOpacity
//               style={{backgroundColor: 'green'}}
//               key={item?.id}
//               onPress={() => toggleSelect(item)}>
//               <Text style={{fontSize: 20}}>{item?.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const items = [
//   {id: 1, name: 'Option 1'},
//   {id: 2, name: 'Option 2'},
//   {id: 3, name: 'Option 3'},
//   // Add more options as needed
// ];

const App = () => {
  // const handleSelection = selectedItems => {
  //   console.log('Selected Items:', selectedItems);
  // };

  return (
    <View style={styles.container}>
      {/* <DropDownMultiSelect
        items={items}
        selectedItems={[]}
        onSelect={handleSelection}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
