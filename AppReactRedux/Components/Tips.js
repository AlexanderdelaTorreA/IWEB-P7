import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
export default class Navbar extends React.Component {

	constructor(props){
		super(props);
		this.showTips = this.showTips.bind(this);
		this.emptyTips = this.emptyTips.bind(this);
	}

	emptyTips(question){
		if (typeof question !== "undefined" && !this.props.isFinished ){
			if (question.tips.length !== 0){
				return (
					<View key='tipskey1223' style={styles.box}>
						<Text key="tipscaja" style={styles.text}>Tips:</Text>
						<FlatList key="flatlist"
						style={styles.list}
						data={question.tips}
						renderItem={({item}) => <Text key={item.length} style={styles.text}>{item}</Text>}/>
					</View>
				);
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
	showTips(question){
		return question.tips.map((tip,id)=>{
			return tip;
		})

	}
	render() {
		return this.emptyTips(this.props.question);
	}
}
const styles = StyleSheet.create({
	text:{

	},
	list:{

		},
	box:{

	}});