
const BookStatus = {
    AVAILABLE: 'AVAILABLE',
    LOANED: 'LOANED',
    LOST: 'LOST'
};
const AccountStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    CLOSED: 'CLOSED',
    BLACKLISTED: 'BLACKLISTED'
};

class LibraryCard {
    constructor() {
        this.cardNumber = this.generateRandomCardNumber();
        this.barCode = this.generateBarcode();
        this.issuedAt = new Date();
        this.isActive = true;
    }

    setActive(status) {
        this.isActive = status;
    }
}

class Account {
    constructor(name, email, password, status) {
        this.userId = this.geenrateRandomeID();
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.libraryCard = new LibraryCard();
    }

    login(email, password) {
        if (email === this.email && this.password === password) {
            console.log('Logged IN');
            this.status = AccountStatus.ACTIVE;
        }
        else {
            console.log('Wrong Credentials')
        }
    }
    logout() {
        this.status = AccountStatus.INACTIVE;
    };
    resetPassword(oldPassword, newPassword) {
        if (oldPassword === this.password) {
            this.password = newPassword;
        }
        else {
            alert('Old Password does not match')
        }
    };
    closeAccount() {
        this.status = AccountStatus.CLOSED;
    }
}

class Member extends Account {
    constructor() {
        this.booksBorrowed = 0;
        this.searchBook = new Search();
        this.dateOfMemeberShip = new Date();
    }

    payFine(amount) {

    }
    checkForFine() {

    }
}

class Librarian extends Account {
    constructor() {
        this.issueService = new BookIssueService();
        this.searchBook = new Search();
    }

    addBook(book);
    deleteBook(book_id);
    // return the updated book
    updateBook(book);
    blockMember(member);
    unBlockMember(member);
    cancelMembership(member);
}

class Search {
    getBookByTitle(title) {
        return this.callAPI(title)
    };
    getBookByAuthor(author) {
        return this.callAPI(author)
    };
    getBookByCateogry(bookType) {
        return this.callAPI(bookType)
    };
}

class Book {
    constructor(title, author, category, shelf, floor, status) {
        this.bookId = this.geenrateRandomeID();
        this.title = title;
        this.author = author;
        this.category = category;
        this.location = new Location(shelf, floor);
        this.status = status;
    }
    setBookStatus(status) {
        this.status = status;
    }
    setBorrowDate(date) {
        this.borrowDate = date;
        this.setDueDate(this.borrowDate + 15)
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
}

class Location {
    constructor(shelf, floor) {
        this.shelfNo = shelf;
        this.floorNo = floor;
    }

    getLocation() {

    }
}

class BookIssueService {
    calculateFine(days, user, book) {

    };
    collectFine(user, days) {

    };
    issueBook(book, user) {
        return dueDate
    };
    renewBook(book, user) {
        return dueDate;
    };
    returnBook(book, user) {

    };
}


class BookIssueDetail {
    constructor(book, startDate, user) {
        this.book = book;
        this.startDate = startDate;
        this.user = user;
        this.dueDate = startDate + 15;
    }
}
