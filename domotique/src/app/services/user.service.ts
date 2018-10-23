import { User } from "../models/user.model";
import { Subject } from "rxjs/Subject";

export class UserService {
	private users: User[] = [
	{
		firstName: 'James',
		lastName: 'Smith',
		email: 'james.smith@email.com',
		drinkPreference: 'Redbull',
		hobbies: [
			'snow',
			'apprendre'
		]
	}];
	userSubject = new Subject<User[]>();

	emitUsers(){
		this.userSubject.next(this.users.slice());
	}

	addUser(user: User){
		this.users.push(user);
		this.emitUsers();
	}
}