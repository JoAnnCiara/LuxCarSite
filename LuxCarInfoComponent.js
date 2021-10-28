import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderLuxCar({luxCar}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={luxCar.image} alt={luxCar.name} />
                <CardBody>
                    <CardTitle>{luxCar.name}</CardTitle>
                    <CardText>{luxCar.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
  
function RenderComments({comments}) {
        if(comments){
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return(
                            <div key={comment.id}>
                                <p>{comment.text}<br/>
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                            </div>
                        );
                    })}
                </div>
            );
        }  
        return <div />; 
}

function LuxCarInfo(props) {
    if (props.luxCar) {
        return (
            <div className="container">
                <div className="row">
                    <RenderLuxCar luxCar={props.luxCar} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default LuxCarInfo;