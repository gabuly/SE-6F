import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class ForumsPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Forums, accessor);
    }

    protected create(): void {
        this.element.appendChild(this._createTop());
        this.element.appendChild(this._createBottom());
    }

    private _createTop(): HTMLElement {
        const top = document.createElement('div');
        top.className = 'top-part';

        const icon = document.createElement('img');
        icon.className = 'icon';

        const text = document.createElement('div');
        text.className = 'forum-text';
        text.innerHTML = 'FORUMS';

        const search = document.createElement('div');
        search.className = 'search button';
        search.innerHTML = 'Search Forums';
        const searchBtn = new Button();
        searchBtn.render(search);
        searchBtn.onDidClick(() => {
            // REVIEW: no nothing for now
            // const keyboard = document.createElement('img');
            // keyboard.className = 'keyboard';

            // this.element.appendChild(keyboard);
        });

        const btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';

        [
            'Class Forum',
            'Friend Forum',
            'Career Forum',
            'Course Forum',
            'Football Forum',
            'More...',
        ].forEach(text => {
            const btn = document.createElement('div');
            btn.className = 'forum-btn button';
            btn.innerHTML = text;
            btnContainer.appendChild(btn);

            const button = new Button();
            button.render(btn);
            button.onDidClick(() => {
                this.accessor.displayPage(EPages.Forum);
            });
        });

        top.appendChild(icon);
        top.appendChild(text);
        top.appendChild(search);
        top.appendChild(btnContainer);
        return top;
    }

    private _createBottom(): HTMLElement {
        const bottom = document.createElement('div');
        bottom.className = 'bottom-part';

        const events = document.createElement('div');
        events.className = 'event-btn button';
        events.innerHTML = 'Events';
        const button1 = new Button();
        button1.render(events);
        button1.onDidClick(() => {
            if (this.accessor.currentPage === EPages.Event) return;
            this.accessor.displayPage(EPages.Event);
        });

        const forum = document.createElement('div');
        forum.className = 'forum-btn button';
        forum.innerHTML = 'Forum';
        const button2 = new Button();
        button2.render(forum);
        button2.onDidClick(() => {
            if (this.accessor.currentPage === EPages.Forums) return;
            this.accessor.displayPage(EPages.Forums);
        });

        const chat = document.createElement('div');
        chat.className = 'chat-btn button';
        chat.innerHTML = 'Chat';
        const button3 = new Button();
        button3.render(chat);
        button3.onDidClick(() => {
            if (this.accessor.currentPage === EPages.Chat) return;
            this.accessor.displayPage(EPages.Chat);
        });

        bottom.appendChild(events);
        bottom.appendChild(forum);
        bottom.appendChild(chat);
        return bottom;
    }

    public dispose(): void {
        // dothing
    }

}