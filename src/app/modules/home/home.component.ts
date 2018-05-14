import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	MUSICALNOTES = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
	SCALETYPES = ['Maior','Menor']
	FRETS = Array.from(Array(22).keys())
	TUNNING = ["E","B","G","D","A","E"]

	scale = {key: '', type:'', notes: []}

	constructor(){
	}
	ngOnInit(){}

	majorScale(key){
		let notes = []
		let start = this.MUSICALNOTES.findIndex(notes => notes===key)
		// T T ST T T T ST
		notes.push(this.MUSICALNOTES[start])
		notes.push(this.MUSICALNOTES[(start+2)%12])
		notes.push(this.MUSICALNOTES[(start+4)%12])
		notes.push(this.MUSICALNOTES[(start+5)%12])
		notes.push(this.MUSICALNOTES[(start+7)%12])
		notes.push(this.MUSICALNOTES[(start+9)%12])
		notes.push(this.MUSICALNOTES[(start+11)%12])
		return notes
	}

	minorScale(key){
		let notes = []
		let start = this.MUSICALNOTES.findIndex(notes => notes===key)
		// T ST T T ST T T
		notes.push(this.MUSICALNOTES[start])
		notes.push(this.MUSICALNOTES[(start+2)%12])
		notes.push(this.MUSICALNOTES[(start+3)%12])
		notes.push(this.MUSICALNOTES[(start+5)%12])
		notes.push(this.MUSICALNOTES[(start+7)%12])
		notes.push(this.MUSICALNOTES[(start+8)%12])
		notes.push(this.MUSICALNOTES[(start+10)%12])
		return notes
	}

	tryToCreate(value,menu){
		this.scale[menu] = value

		if(this.scale.key!='' && this.scale.type!=''){
			if(this.scale.type=='Maior')
				this.scale.notes = this.majorScale(this.scale.key)
			else if(this.scale.type=='Menor')
				this.scale.notes = this.minorScale(this.scale.key)				
		}
	}

	isNoteOnScale(note){
		if(this.scale.notes.includes(note))
			return true
		else 
			return false
	}
	stringNote(fret,key){
		let start = this.MUSICALNOTES.findIndex(notes => notes===key)
		return this.MUSICALNOTES[(start+fret)%12]
	}
}